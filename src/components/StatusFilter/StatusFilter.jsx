import { useSelector, useDispatch } from "react-redux";
import { Wrapper, FilterButton } from "./StatusFilter.styled";
import { statusFilters } from "../../redux/constants";
import { selectStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filterSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <>
      <Wrapper>
        <FilterButton
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          show all
        </FilterButton>
        <FilterButton
          selected={filter === statusFilters.follow}
          onClick={() => handleFilterChange(statusFilters.follow)}
        >
          follow
        </FilterButton>
        <FilterButton
          selected={filter === statusFilters.followings}
          onClick={() => handleFilterChange(statusFilters.followings)}
        >
          followings
        </FilterButton>
      </Wrapper>
    </>
  );
};

export default StatusFilter;
