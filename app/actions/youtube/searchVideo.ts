"use server"
import { redirect } from "next/navigation";

    
const submit = async (formData: FormData) => {
    // "use server"
    const busqueda = formData.get("texto-busqueda")
    if (busqueda) {
      redirect(`/youtube?search_query=${busqueda?.toString()! || ""}`)
    } else {
        console.log("pues no hay nada")
    }
    
}


export default submit