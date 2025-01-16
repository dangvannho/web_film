function NavItem({ label, icon, active }) {
  return (
    <li
      className={`flex items-center justify-end p-2 cursor-pointer hover:bg-primary hover:text-white ${
        active ? "bg-primary text-white" : ""
      }`}
    >
      <h4 className="text-3xl mx-1">{label}</h4>
      {icon}
    </li>
  );
}

export default NavItem;
