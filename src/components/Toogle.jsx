export function Toogle() {
  const handleToogle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
  };

  return <i onClick={handleToogle} className="bx bx-chevron-right toogle"></i>;
}
