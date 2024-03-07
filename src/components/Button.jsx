/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Button({
  children,
  type = "button",
  bgColor = "bg-[#1477D2]",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
