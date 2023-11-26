import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Dashboard/Sidebar";
import AppointMentForm from "../Appointment/AppointMentForm/AppointMentForm";
const Home = () => {
  return (
    <div className="home">
    <Sidebar></Sidebar>
    <Dashboard></Dashboard>
    <AppointMentForm></AppointMentForm>

    </div>
  );
};

export default Home;
