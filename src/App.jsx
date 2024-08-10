import Student from "./Student.jsx"
import Card from "./Card.jsx"
import ButtonSub from "./Button.jsx"

function App() {
    return (
    <>
    <Student name="AliceInWondeland" location="London" age={18} job="laboratory" isStudent={true} />
    <ButtonSub/>
    <Student name="Otto" location="Berlin" age={29} job="Nurse" isStudent={false}/>
    <ButtonSub/>
    <Card/>
    <ButtonSub/>
    
    </>
    );
}
export default App


