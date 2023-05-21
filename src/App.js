import { UseAdmin } from "./Hooks/UsAdmin";
import { Admin } from "./Pages/Admin/Admin";
import { Private } from "./Private";

function App() {
  const {adToken} = UseAdmin()
  if (adToken?.data?.admin) {
    return <Admin/>
  }
  return <Private/>

}

export default App;
