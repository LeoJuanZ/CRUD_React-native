import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class CustomImageLink extends React.Component {
    render() {
        const { navigate } =this.props.navigation;
        return (
            <TouchableOpacity
              onPress={() => navigate(this.props.imageRoute)}
            >
                <ImageBackground 
                  source={this.props.imageSource}
                  style={this.props.imageStyle}
                >
                    <ImageOverlay
                        header={this.props.header}
                        paragraph={this.props.paragraph}
                    />
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    fullWidth: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullHeight: {
        width: 100,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullSize: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});