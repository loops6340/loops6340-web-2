import { projectData } from "@/app/watch-data";
import Button from "@/components/Button";
import Link from "next/link";

const layout: React.FC<{ children: React.ReactNode; params: any }> = ({
  children,
  params,
}) => {
  const project: any = projectData.find(
    (project) => project.id === parseInt(params.date)
  );

  return (
    <>
      <main className="flex flex-col min-h-screen gap-[0.60rem] lg:ml-[2.20rem] lg:mr-[2.15rem] pt-[3.2rem] lg:pt-[3.8rem] lg:flex-row">
        {children}
      </main>
      <footer className="mt-[100px]">
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem]">
          <span className="text-[16px] text-[#222] font-normal">
            Aquí no sé que poner todavía
          </span>
          <p>
            Creditos:
            - Goku
            - Yo
            - Goku  
          </p>
        </div>
      </footer>
    </>
  );
};

export default layout;
