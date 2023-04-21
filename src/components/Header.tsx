type HeaderProps = {
    setApiKey: (apiKey: string) => void;
    apiKey: string;
}

const Header = ({setApiKey, apiKey}: HeaderProps) => {
    return (
        <div style={{height: '3rem', backgroundColor: "#272727", display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '10vw'}}>Games DB</div>
            <input style={{flex: 1, marginRight: '1rem'}} />
            <input style={{marginRight: '1rem'}} value={apiKey} onChange={(event) => setApiKey(event.target.value)}/>
        </div>
    )
}
export default Header;