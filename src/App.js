import './App.css';
import Header from "./components/Header";
import ActiveNotification from "./components/ActiveNotification";
import CompletedNotification from "./components/CompletedNotification";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-[#f7fafd] flex justify-center items-center py-4">
      <div className='w-1/2 bg-[#ffffff] p-6 rounded-lg shadow-md'>
        <Header />
        <main>
          <ActiveNotification />
          <CompletedNotification />
        </main>
      </div>
    </div>
  );
}

export default App;
