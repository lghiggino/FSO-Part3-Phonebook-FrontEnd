export default function Footer() {
    const footerStyle = {
        color: "grey",
        fontStyle: "italic",
        fontSize: 16,
        position: "fixed",
        bottom: "16px"
    }
    return (
        <footer style={footerStyle}>
            <em>Note app, Department of Computer Science, University of Helsini 2021</em>
        </footer>
    )

}