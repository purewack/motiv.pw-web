export default function TestDiv({className, ...restProps}){
    return <div className={"Test " + className} {...restProps}>Test</div>
}