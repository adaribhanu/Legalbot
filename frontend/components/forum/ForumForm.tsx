"use client";

interface ForumFormProps {
  formData: {
    state: string;
    district: string;
    claim_amount: number;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      state: string;
      district: string;
      claim_amount: number;
    }>
  >;
}

export default function ForumForm({
  formData,
  setFormData,
}: ForumFormProps) {

  const inputStyle =
    "w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500";

  return (

    <div className="space-y-5">

      <input
        className={inputStyle}
        placeholder="State"
        value={formData.state}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            state: e.target.value,
          }))
        }
      />

      <input
        className={inputStyle}
        placeholder="District"
        value={formData.district}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            district: e.target.value,
          }))
        }
      />

      <input
        type="number"
        className={inputStyle}
        placeholder="Claim Amount (₹)"
        value={
          formData.claim_amount || ""
        }
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            claim_amount: Number(e.target.value),
          }))
        }
      />

    </div>

  );

}