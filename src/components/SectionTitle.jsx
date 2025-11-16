const SectionTitle = ({ title, className }) => {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="rounded-full bg-[#6D28D9] w-2 h-2" />
      <h3 className="font-semibold tracking-tight">{title}</h3>
    </div>
  );
};
export default SectionTitle;
