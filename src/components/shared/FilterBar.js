const FilterBar = ({ filter, setFilter }) => {
  return (
    <div>
      { ['All', 'Active', 'Completed'].map( f => filterLink(filter, f, setFilter))}
    </div>
  )
}

const filterLink = (current, name, setFilter) => {
  if (current === name) {
    return <span>{name}</span>
  }
  else {
    return <span style={styles.link} onClick={() => setFilter(name)}>{name}</span>
  }
}

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    margin: '0 5px',
  }
}

export default FilterBar;