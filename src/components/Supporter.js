// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button} from 'semantic-ui-react';


const Supporter = (props) => {
    const { name, img, link } = props;
    return (
        <div className="container" >
            <a href={link}>
                <Image
                    src={img}
                    alt={name}
                    className={'img-responsive'}
                />
                <div className="transparent">
                <Button className="btn">View Site </Button>
                </div>
            </a>
        </div>
    );
};

Supporter.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default Supporter;

