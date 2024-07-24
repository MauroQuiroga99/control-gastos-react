import { useState } from "react";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };
  return (
    <form className="space-y-5">
      <div className="flex flex-col ">
        <label
          htmlFor="budget"
          className=" mb-4 text-4xl text- lue-600 font-bold text-center"
        >
          Definir presupuesto
        </label>
        <input
          id="budgetID"
          type="number"
          className="w-full bg-white border border-gray-200 rounded-lg p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        placeholder="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
      />
    </form>
  );
}
