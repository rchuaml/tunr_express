var React = require('react');
var DefaultLayout = require ('./default');


class UpdatedArtist extends React.Component {
    render() {
        // console.log(this.props)
        const updateArtist = this.props;
        return(
                <DefaultLayout>
                <div>
                <h2> Updated Artist! </h2>
                    <h3> Name:  </h3>
                        <p> {updateArtist[0]} </p>
                    <h3> Url: </h3>
                        <p> {updateArtist[1]} </p>
                    <h3> Nationality: </h3>
                        <p> {updateArtist[2]} </p>
                </div>
                </DefaultLayout>
        )
    }
}

module.exports = UpdatedArtist;