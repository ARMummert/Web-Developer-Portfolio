import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
Font.register({
    family: 'Times-Roman',
    src: 'https://fonts.gstatic.com/s/timesroman/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff'
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        '@media max-width': {
            flexDirection: 'column',
        },
        justifyContent: 'center',
        alignItems: 'center',
        readOnly: true,
        editable: false,
    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 1,
    },
});

const disableRightClick = () => {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
};
const disableSave = () => {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });
}

const BatonTwirlingDemoPDF = () => {
    useEffect(() => {
        disableRightClick();
        disableSave();
    }, []);

    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.overlay} />
                <View style={styles.section}>
                    <Text style={styles.header} fixed>
                        Baton Twirling Competition Entry Form
                    </Text>
                    <Text style={styles.title}>A database for baton twirling competitions where athletes and coaches can register for events.</Text>
                    <Text style={styles.author}>Amy Mummert & Joel Vrieze</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    );
};

export default BatonTwirlingDemoPDF;
