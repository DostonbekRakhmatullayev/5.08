import Pagination from "@mui/material/Pagination";

export const Paginations = ({data, setActive}) => {
    return (
        <>
         <div>
          <Pagination
          onClick={(evt) => {
            setActive(evt.target.innerText)

          }}
            count={data.totalPage}
            variant="outlined"
            shape="rounded"
          />
        </div>
        </>
    )
}