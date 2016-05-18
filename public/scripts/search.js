var SiteRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.site.title}</td>
                <td>
                    <a href={this.props.site.link} target="blank">View</a>
                </td>
            </tr>
        );
    }
});

var SiteTable = React.createClass({
    render: function() {
        var props = this.props;
        var rows = this.props.sites
            .filter(function(site) {
                return site.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .map(function(site) {
            return <SiteRow key={site.title} site={site} />;
        });
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <hr />
                </div>
                <div className="col-sm-4 col-sm-offset-4">
                    <table width="100%">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var HeaderTitle = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <h2>Useful Sites And Blogs</h2>
                </div>
            </div>
        );
    }
});

var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onFilterInput(
            this.refs.filterTextInput.value
        );
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <input
                        ref="filterTextInput"
                        value={this.props.filterText}
                        onChange={this.handleChange}
                        type="search"
                        className="form-control"
                        placeholder="Search for site"
                    />
                </div>
            </div>
        );
    }
});

var FilterableSiteTable = React.createClass({
    getInitialState: function() {
        return {
            filterText:''
        };
    },
    handleFilterInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        return (
            <div className="container" >
                <div className="spacer">
                    <HeaderTitle />
                    <SearchBar
                        onFilterInput={this.handleFilterInput}
                        filterText={this.state.filterText}
                    />
                    <SiteTable
                        filterText={this.state.filterText}
                        sites={this.props.sites}
                    />
                </div>
            </div>
        );
    }
});

var sites = [
    {
        title: 'Stack Overflow',
        link: 'http://stackoverflow.com/'
    },
    {
        title: 'Laracasts',
        link: 'https://laracasts.com/',
        date: new Date(2016,3,11)
    },
    {
        title: 'Codecademy',
        link: 'https://www.codecademy.com'
    },
    {
        title: 'Scotch.io',
        link: 'https://scotch.io/'
    },
    {
        title: 'PHP The Right Way',
        link: 'http://www.phptherightway.com/'
    },
    {
        title: 'Egghead.io',
        link: 'https://egghead.io/'
    },
    {
        title: 'EnvatoTuts',
        link: 'http://tutsplus.com/'
    },
    {
        title: 'Code School',
        link: 'https://www.codeschool.com/'
    },
    {
        title: 'Codrops',
        link: 'http://tympanus.net/codrops/'
    },
    {
        title: 'Jquery Plugins',
        link: 'http://jqueryplugins.net/'
    },
    {
        title: 'CodeCourse',
        link: 'https://www.codecourse.com/'
    },
    {
        title: 'Zaengle Blog',
        link: 'http://zaengle.com/blog'
    }
];

ReactDOM.render(
    <FilterableSiteTable sites={sites} />,
    document.getElementById('content')
);