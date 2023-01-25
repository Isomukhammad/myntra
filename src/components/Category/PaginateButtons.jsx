import ReactPaginate from "react-paginate";

const PaginateButtons = () => {
    return (
        <div className="PaginateButtons">
            <ReactPaginate
                previousLabel={
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-textSecondary"
                    >
                        <use xlinkHref="#arrow-left"></use>
                    </svg>
                }
                nextLabel={
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-textSecondary"
                    >
                        <use xlinkHref="#arrow-right"></use>
                    </svg>
                }
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={20}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link previous-page"
                nextClassName="page-item"
                nextLinkClassName="page-link next-page"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                className="PaginateButtons__buttons flex flex-row justify-between gap-1 font-semibold text-center text-white text-xs w-full"
            />
        </div>
    );
}

export default PaginateButtons;