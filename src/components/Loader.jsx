import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#c2c2c2"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
    </ContentLoader>
)

export default MyLoader