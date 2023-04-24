type HeaderProps = {
    setApiKey: (apiKey: string) => void;
    apiKey: string;
    setSearchText: (searchText: string | undefined) => void;
    searchText?: string;
}

const Header = ({ setApiKey, apiKey, searchText, setSearchText }: HeaderProps) => {
    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (event.key === 'Enter') {
            setSearchText(event.currentTarget.value);
        }
    }

    return (
        <div style={{ height: '3rem', backgroundColor: "#272727", display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '10vw', margin: 10 }}>Games DB</div>
            <input style={{ flex: 1, marginRight: '1rem', backgroundColor: '#272727', color: "white" }} defaultValue={searchText} onKeyDown={handleSearch} />
            <input style={{ marginRight: '1rem', backgroundColor: '#272727', color: "white"}} value={apiKey} onChange={(event) => setApiKey(event.target.value)} />
        </div>
    )
}
export default Header