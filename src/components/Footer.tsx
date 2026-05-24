export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-[#11111b] border-t border-[#292929]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#c4c4c4] text-sm">
          © {new Date().getFullYear()} Ahamed Haden R. All rights reserved.
        </p>
        <p className="text-[#8888aa] text-sm">
          Designed and built with precision.
        </p>
      </div>
    </footer>
  );
}
