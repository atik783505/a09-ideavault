
import AddIdeaForm from "@/components/AddIdeaForm"; 

export const metadata = {
  title: "Add New Idea | Idea Vault",
  description: "Secure your new innovative idea safely in the vault.",
};

export default function AddIdeaPage() {
  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <AddIdeaForm />
    </div>
  );
}