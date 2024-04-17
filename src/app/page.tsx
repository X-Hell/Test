import ItemList from "@/components/ItemList";
import RecipeList from "@/components/RecipeList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <ItemList />
      </div>
      <div className="flex-1">
        <RecipeList />
      </div>
    </div>
  );
}
