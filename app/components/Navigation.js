import { ImStatsBars2 } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User Information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://thispersondoesnotexist.com/"
              alt="Profile image"
            />
          </div>
          {/* Name */}
          <small>Welcome, Leon!</small>
        </div>
        {/* Right side of our Navigation*/}
        <nav className="flex items-center gap-2">
          <div>
            <ImStatsBars2 className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
