import DropDown from "./DropDown";

interface IHeaderAdmin {
  children: JSX.Element;
  title: string;
}

export default function HeaderAdmin({ children, title }: IHeaderAdmin) {
  let arr = [
    {
      dropdown: [
        {
          name: "AA",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#262627]">
      <div className="max-w-[450px] mx-auto">
        <div className="flex">
          <p className="text-center">{title}</p>
          {arr.map((item, index) => (
            <DropDown items={item.dropdown} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
