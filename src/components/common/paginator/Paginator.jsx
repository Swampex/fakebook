import React, {useState} from "react";
import css from "./Paginator.module.css";

let Paginator = ({clusterSize, currentPage, onPageChanged, totalPages}) => {
    let [selectedCluster, setSelectedCluster] = useState(1);
    let firstPageInCluster = (selectedCluster-1) * clusterSize + 1;
    let lastPageInCluster = firstPageInCluster + clusterSize;
    let clustersTotal = Math.ceil(totalPages / clusterSize);

    const incrementClusterNumber = () => {
        setSelectedCluster(selectedCluster+1);
    };

    const decrementClusterNumber = () => {
        setSelectedCluster(selectedCluster-1);
    };

    let pages = [];
    for (let page = firstPageInCluster; page < lastPageInCluster; page++) {
        pages.push(page);
    }
    return (
        <div className={css.pagingBlock}>
            <div>
                {selectedCluster !== 1 && <button onClick={decrementClusterNumber}> ← </button>}
            </div>
            {pages.map(p => {
                return <div className={ (currentPage === p && css.pagingBlock__selectedPage)
                || css.pagingBlock__notSelectedPage}
                    onClick={(e) => {onPageChanged(p)}} key={p}> {p} </div>
            })}
            <div>
                {selectedCluster !== clustersTotal && <button onClick={incrementClusterNumber}> → </button>}
            </div>
        </div>
    )
}

export default Paginator;