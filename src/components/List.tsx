import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const List = () => {

    const games = useAppSelector((state: RootState) => state.games);

    return (
        <div style={{ width: '100vw', display: 'flex', flexWrap: "wrap",justifyContent: "space-around", marginTop: '3rem'}}>
            {games.map(item => {
                return (
                    <div key={item.id} style={{backgroundColor: "#272727", border: '1px solid', borderRadius: 30, width: 300, height: 150, margin: '1rem', marginBottom: '5rem' }}>
                        <img src={item.background_image} alt={item.name} width={300} height={150} style={{borderRadius: 30}}/>
                        <div style={{height: '35%'}}>
                        <h3>{item.name}</h3>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default List;