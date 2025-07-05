"use client";
import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { NumericFormat } from "react-number-format";
import Text from "@/components/atoms/Text";
import { ArrowLeft } from "iconsax-react";
import Dropdown from "@/components/atoms/Dropdown";
import CustomDatePicker from "@/components/atoms/CustomDatePicker";

// Constants - Pisahkan data statis
const STUDENT_OPTIONS = [
  { value: "1", label: "Ahmad Fauzi" },
  { value: "2", label: "Siti Nurhaliza" },
  { value: "3", label: "Muhammad Rizki" },
  { value: "4", label: "Fatimah Azzahra" },
  { value: "5", label: "Abdullah Rahman" },
];

const PAYMENT_TYPE_OPTIONS = [
  { value: "spp", label: "SPP Bulanan" },
  { value: "daftar_ulang", label: "Daftar Ulang" },
  { value: "seragam", label: "Seragam" },
  { value: "buku", label: "Buku Pelajaran" },
  { value: "kegiatan", label: "Kegiatan Ekstrakurikuler" },
  { value: "lainnya", label: "Lainnya" },
];

// Validation rules
const VALIDATION_RULES = {
  student_id: { required: true, message: "Silakan pilih nama santri!" },
  payment_type: { required: true, message: "Silakan pilih jenis pembayaran!" },
  payment_date: { required: true, message: "Silakan pilih tanggal pembayaran!" },
  amount_per_month: { required: true, message: "Silakan masukkan jumlah yang harus dibayar!" },
  number_of_months: { required: true, message: "Silakan masukkan jumlah bulan!" },
};

// Komponen Currency Input
const CurrencyInput = ({ value, onValueChange, placeholder, required, readOnly, className }) => (
  <NumericFormat
    value={value}
    onValueChange={(values) => onValueChange(values.floatValue || 0)}
    thousandSeparator="."
    decimalSeparator=","
    prefix="Rp. "
    placeholder={placeholder}
    required={required}
    readOnly={readOnly}
    className={className}
    allowNegative={false}
  />
);

// Custom Hook untuk Form Management
const useFormData = () => {
  const [formData, setFormData] = useState({
    student_id: "",
    payment_type: "",
    payment_date: null,
    amount_per_month: 0,
    number_of_months: 0,
    total_amount: 0,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoized calculation
  const calculateTotal = useCallback((amount, months) => {
    return (amount || 0) * (months || 0);
  }, []);

  // Generic field updater
  const updateField = useCallback((field, value) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Auto-calculate total for amount and months
      if (field === "amount_per_month" || field === "number_of_months") {
        const amount = field === "amount_per_month" ? value : prev.amount_per_month;
        const months = field === "number_of_months" ? value : prev.number_of_months;
        newData.total_amount = calculateTotal(amount, months);
      }
      
      return newData;
    });
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [errors, calculateTotal]);

  // Validation function
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    Object.entries(VALIDATION_RULES).forEach(([field, rule]) => {
      if (rule.required && !formData[field]) {
        newErrors[field] = rule.message;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  return {
    formData,
    errors,
    isSubmitting,
    setIsSubmitting,
    updateField,
    validateForm,
  };
};

export default function TambahDataPembayaran() {
  const router = useRouter();
  const { formData, errors, isSubmitting, setIsSubmitting, updateField, validateForm } = useFormData();

  // Memoized options untuk prevent re-render
  const studentOptions = useMemo(() => STUDENT_OPTIONS, []);
  const paymentTypeOptions = useMemo(() => PAYMENT_TYPE_OPTIONS, []);

  // Handlers
  const handleBack = useCallback(() => {
    router.back(); // Kembali ke halaman sebelumnya
  }, [router]);

  const handleDropdownSelect = useCallback((field) => (selectedOption) => {
    updateField(field, selectedOption?.value || "");
  }, [updateField]);

  const handleInputChange = useCallback((field) => (e) => {
    const value = e.target.value;
    updateField(field, field === "number_of_months" ? parseInt(value) || 0 : value);
  }, [updateField]);

  const handleDateChange = useCallback((field) => (date) => {
    updateField(field, date);
  }, [updateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form Data:", formData);
      alert("Data pembayaran berhasil disimpan!");
      
      // Redirect after successful submission
      router.push("/keuangan/pembayaran");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan saat menyimpan data!");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, router]);

  return (
    <>
      <div className="flex items-center mb-4">
        <ArrowLeft
          size={25}
          className="cursor-pointer hover:text-pri-main transition-colors"
          onClick={handleBack}
        />
      </div>

      <div className="w-full h-full px-4 md:px-40 pb-16 -mt-5 text-center justify-center space-y-7">
        <Text className="text-black text-lg font-semibold">
          Tambah Data Pembayaran Santri
        </Text>

        <form onSubmit={handleSubmit}>
          <div className="p-8 md:p-16 rounded-[25px] shadow-[0px_2px_4px_0px_rgba(15,74,73,0.25)] outline outline-1 outline-offset-[-1px] outline-[#b1cacd]">
            <div className="space-y-5 text-left">
              {/* Nama Santri */}
              <div className="w-full space-y-[5px]">
                <Text className="text-[#394142] text-lg font-semibold">
                  Nama Santri <span className="text-red-500">*</span>
                </Text>
                <Dropdown
                  options={studentOptions}
                  placeholder="Pilih Nama Santri"
                  onSelect={handleDropdownSelect("student_id")}
                />
                {errors.student_id && (
                  <Text className="text-red-500 text-sm">{errors.student_id}</Text>
                )}
              </div>

              {/* Keperluan Pembayaran */}
              <div className="w-full space-y-[5px]">
                <Text className="text-[#394142] text-lg font-semibold">
                  Keperluan Pembayaran <span className="text-red-500">*</span>
                </Text>
                <Dropdown
                  options={paymentTypeOptions}
                  placeholder="Pilih Jenis Pembayaran"
                  onSelect={handleDropdownSelect("payment_type")}
                />
                {errors.payment_type && (
                  <Text className="text-red-500 text-sm">{errors.payment_type}</Text>
                )}
              </div>

              {/* Tanggal Pembayaran */}
              <div className="w-full space-y-[5px]">
                <Text className="text-[#394142] text-lg font-semibold">
                  Tanggal Pembayaran <span className="text-red-500">*</span>
                </Text>
                <CustomDatePicker
                  required
                  placeholder="Pilih tanggal pembayaran"
                  value={formData.payment_date}
                  onChange={handleDateChange("payment_date")}
                />
                {errors.payment_date && (
                  <Text className="text-red-500 text-sm">{errors.payment_date}</Text>
                )}
              </div>

              {/* Jumlah yang harus dibayar, Jumlah Bulan */}
              <div className="w-full lg:flex lg:space-x-10 space-y-5 lg:space-y-0">
                <div className="w-full lg:w-1/2 space-y-[5px]">
                  <Text className="text-[#394142] text-lg font-semibold">
                    Jumlah yang harus dibayar{" "}
                    <span className="text-red-500">*</span>
                  </Text>
                  <CurrencyInput
                    value={formData.amount_per_month}
                    onValueChange={(value) => updateField("amount_per_month", value)}
                    placeholder="Rp. 1.000.000"
                    required
                    className="w-full border border-netral-20 rounded-md py-2 px-4 text-sm font-normal focus:outline-pri-main"
                  />
                  {errors.amount_per_month && (
                    <Text className="text-red-500 text-sm">{errors.amount_per_month}</Text>
                  )}
                </div>
                <div className="w-full lg:w-1/2 space-y-[5px]">
                  <Text className="text-[#394142] text-lg font-semibold">
                    Jumlah Bulan <span className="text-red-500">*</span>
                  </Text>
                  <input
                    type="number"
                    value={formData.number_of_months}
                    onChange={handleInputChange("number_of_months")}
                    placeholder="Ex : 2"
                    className="w-full border border-netral-20 rounded-md py-2 px-4 text-sm font-normal focus:outline-pri-main"
                    required
                  />
                  {errors.number_of_months && (
                    <Text className="text-red-500 text-sm">{errors.number_of_months}</Text>
                  )}
                </div>
              </div>

              {/* Total Pembayaran */}
              <div className="space-y-[5px]">
                <Text className="text-[#394142] text-lg font-semibold">
                  Total Pembayaran
                </Text>
                <CurrencyInput
                  value={formData.total_amount}
                  onValueChange={() => {}}
                  placeholder="Total akan dihitung otomatis"
                  readOnly
                  className="w-full border border-netral-20 rounded-md py-2 px-4 text-sm font-normal focus:outline-pri-main bg-gray-50"
                />
              </div>

              {/* Keterangan */}
              <div className="space-y-[5px]">
                <Text className="text-[#394142] text-lg font-semibold">
                  Keterangan
                </Text>
                <textarea
                  value={formData.description}
                  onChange={handleInputChange("description")}
                  placeholder="Masukkan keterangan tambahan..."
                  rows="3"
                  className="w-full border border-netral-20 rounded-md py-2 px-4 text-base font-normal focus:outline-pri-main resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-12 space-x-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 bg-[#f2fffa] rounded-[15px] hover:shadow-[0px_0.5px_6px_0px_rgba(27,158,148,0.40)] outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex justify-center items-center gap-2.5"
                  disabled={isSubmitting}
                >
                  <Text className="text-[#146168] text-lg font-semibold">
                    Kembali
                  </Text>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#146168] rounded-[15px] hover:shadow-[0px_0.5px_6px_0px_rgba(15,74,73,0.40)] outline outline-1 outline-offset-[-1px] outline-[#b1cacd] inline-flex justify-center items-center gap-2.5"
                  disabled={isSubmitting}
                >
                  <Text className="text-[#f2fffa] text-lg font-semibold">
                    {isSubmitting ? "Menyimpan..." : "Simpan"}
                  </Text>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}