import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.afterSubmit(this.state.term);
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <div className="pt-5 px-5 py-5 ">
          <form action="" onSubmit={this.onSearchSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={this.onInputChange}
                value={this.state.term}
              />
              <button type="submit" className="btn btn-outline-primary">
                search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
