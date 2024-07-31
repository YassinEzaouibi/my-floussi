// CardsWithUsers.jsx
import Cards from "./Cards.jsx";
import Users from "./user/Users.jsx";
import Admins from "./user/Admins.jsx";

const CardsWithUsers = () => {
  return (
    <main className="flex-1">
      <div className="space-y-2 pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Cards />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <table
            // eslint-disable-next-line react/prop-types
            className={`w-full whitespace-no-wrap `}
          >
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">User Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Mail</th>
                <th className="px-4 py-3">Info</th>
              </tr>
            </thead>
            <Admins />
            <Users />
          </table>
        </div>
      </div>
    </main>
  );
};

export default CardsWithUsers;
