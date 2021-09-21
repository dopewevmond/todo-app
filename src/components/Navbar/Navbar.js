export default function Navbar() {
    return (
        <div className="bg-blue-700">
            <div className="container">
                <nav className="nav flex flex-wrap items-center justify-between px-4 py-4">
                    <div className="font-bold tracking-tighter text-gray-200">TODO APP</div>
                    <div className="text-gray-900">
                        <label>
                            Now Showing: &nbsp;
                            <select name="now-showing" id="now-showing">
                                <option value="all">All Tasks</option>
                                <option value="completed">Completed Tasks</option>
                            </select>
                        </label>
                    </div>
                </nav>
            </div>
        </div>
    );
}