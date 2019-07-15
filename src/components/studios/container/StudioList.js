import React, {Component} from 'react';



class StudioList extends Component {
    render() {

        const { studios } = this.props;

        const ListOfStudios = (studios || {}).studios;

        const singleStudio = (ListOfStudios || {});

        let setOfStudios;

        if (singleStudio.length > 0) {
            setOfStudios = singleStudio.map((studio) =>

                <div key={studio._id} className="col-12 col-sm-6 col-md-3">
                    <img className='studio-image' src={studio.comicImage} alt='Cover' />
                </div>

            );
        } else {
            setOfStudios = <div className='container'> <h4 className='text-center'>No studio</h4></div>
        }


        return (
            <React.Fragment>
                { setOfStudios }
            </React.Fragment>
        );
    }
}

StudioList.propTypes = {};

export default StudioList;
