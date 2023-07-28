import './App.css'

function App() {

    return (
        <>
            <div className='result'>
                <h4>Your Result</h4>
                <h1>76</h1>
                <p className='points'>of 100</p>

                <h3>Great</h3>
                <p className='description'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
            <p>Summary</p>
            <div className='skills'>
                <p>Reaction</p>
                <p>80 / 100</p>
            </div>
            <div className='skills'>
                <p>Memory</p>
                <p>92 / 100</p>
            </div>
            <div className='skills'>
                <p>Verbal</p>
                <p>61 / 100</p>
            </div>
            <div className='skills'>
                <p>Visual</p>
                <p>72 / 100</p>
            </div>
            <button className='btn'>Continue</button>
        </>
    )
}

export default App
