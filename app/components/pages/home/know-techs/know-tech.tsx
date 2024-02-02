/* eslint-disable prettier/prettier */
import CmsIcon from "@/app/components/cms-icon";
import { KnownTechs as IKnownTechs } from "@/app/types/projects";
type KnowTechProps = {
  tech: IKnownTechs;
};
const KnowTech = ({ tech }: KnowTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CmsIcon icon={tech.iconSvg} />
      </div>
      <span>1 ano de experiência</span>
    </div>
  );
};

export default KnowTech;
