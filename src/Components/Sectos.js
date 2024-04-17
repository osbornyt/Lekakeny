import '../main.css';
import SectorsCard from './SectorsCard';

function Sectors () {
    return (
        <div className="sectors">
            <div className="sectors-title">
                <h2>SECTORS & INDUSTRIES</h2>
            </div>
            <div className="sectors-content">
                <SectorsCard title="AUTOMATIVE" src="/automative.jpg"></SectorsCard>
                <SectorsCard title="TECH" src="/tech.jpg"></SectorsCard>
                <SectorsCard title="FINANCIAL" src="/financial.jpg"></SectorsCard>
                <SectorsCard title="INDUSTRIAL" src="/industrial.jpg"></SectorsCard>
            </div>
        </div>
    )
}

export default Sectors;