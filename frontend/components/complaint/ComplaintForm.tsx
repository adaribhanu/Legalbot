"use client";

interface ComplaintFormProps {
  formData: {
    consumer_name: string;
    email: string;
    phone: string;
    seller: string;
    product: string;
    issue: string;
    facts: string;
    relief: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      consumer_name: string;
      email: string;
      phone: string;
      seller: string;
      product: string;
      issue: string;
      facts: string;
      relief: string;
    }>
  >;
}

export default function ComplaintForm({
  formData,
  setFormData,
}: ComplaintFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="space-y-6">

      {/* Consumer Details */}

      <div>

        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Consumer Details
        </h2>

        <div className="space-y-4">

          <input
            name="consumer_name"
            placeholder="Consumer Name"
            value={formData.consumer_name}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

      </div>

      {/* Seller */}

      <div>

        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Opposite Party
        </h2>

        <div className="space-y-4">

          <input
            name="seller"
            placeholder="Seller / Company"
            value={formData.seller}
            onChange={handleChange}
            className={inputClass}
          />

          <input
            name="product"
            placeholder="Product / Service"
            value={formData.product}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

      </div>

      {/* Complaint */}

      <div>

        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Complaint Details
        </h2>

        <div className="space-y-4">

          <input
            name="issue"
            placeholder="Issue"
            value={formData.issue}
            onChange={handleChange}
            className={inputClass}
          />

          <textarea
            rows={5}
            name="facts"
            placeholder="Facts of the case..."
            value={formData.facts}
            onChange={handleChange}
            className={inputClass}
          />

          <textarea
            rows={4}
            name="relief"
            placeholder="Relief Requested..."
            value={formData.relief}
            onChange={handleChange}
            className={inputClass}
          />

        </div>

      </div>

    </div>
  );
}