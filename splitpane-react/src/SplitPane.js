// Citation: This component was based upon this tutorial from LogRocket:
// https://blog.logrocket.com/how-to-create-a-split-pane-component-in-react/


import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import QuoteContext from "./QuoteContext";
  import SplitPaneContext from "./SplitPaneContext";

  let counter = 0
  
  const SplitPane = ({ children, ...props }) => {
    const [clientHeight, setClientHeight] = useState(null);
    const [clientWidth, setClientWidth] = useState(null);
    const yDividerPos = useRef(null);
    const xDividerPos = useRef(null);
  
    const onMouseHoldDown = (e) => {
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    const onMouseHoldUp = () => {
      yDividerPos.current = null;
      xDividerPos.current = null;
    };
  
    const onMouseHoldMove = (e) => {
      if (!yDividerPos.current && !xDividerPos.current) {
        return;
      }
  
      setClientHeight(clientHeight + e.clientY - yDividerPos.current);
      setClientWidth(clientWidth + e.clientX - xDividerPos.current);
  
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    useEffect(() => {
      document.addEventListener("mouseup", onMouseHoldUp);
      document.addEventListener("mousemove", onMouseHoldMove);
  
      return () => {
        document.removeEventListener("mouseup", onMouseHoldUp);
        document.removeEventListener("mousemove", onMouseHoldMove);
      };
    });
  
    return (
      <div {...props}>
        <SplitPaneContext.Provider
          value={{
            clientHeight,
            setClientHeight,
            clientWidth,
            setClientWidth,
            onMouseHoldDown,
          }}
        >
          {children}
        </SplitPaneContext.Provider>
      </div>
    );
  };

  export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);
  
    return <div {...props} onMouseDown={onMouseHoldDown} />;
  };
  
  export const SplitPaneTop = (props) => {
    const { quotes, currQuote } = useContext(QuoteContext);
    const quote = quotes.find((el) => el.id === currQuote);

    return (
        <div {...props} className="split-pane-top">
            <div>
                <h3>{quote.title}</h3>
                {quote.description}
                <br></br>—{" "}
                {quote.author}
            </div>
        </div>
  );
  };
  
  export const SplitPaneBottom = (props) => {
    const topRef = createRef();
    const { clientHeight, setClientHeight } = useContext(SplitPaneContext);
    const { quotes, setCurrQuote } = useContext(QuoteContext);
  
    useEffect(() => {
      if (!clientHeight) {
        setClientHeight(topRef.current.clientHeight);
        return;
      }
  
      topRef.current.style.minHeight = clientHeight + "px";
      topRef.current.style.maxHeight = clientHeight + "px";
    }, [clientHeight]);
  
    function clickMe() {
        counter = counter + 1
        if (counter == 7) {
          counter = 0
        }
        setCurrQuote(quotes[counter].id)
      };

    return (
      <div {...props} className="split-pane-bottom" ref={topRef}>
        <button type="button" onClick={clickMe} className="SignUpButton">Next</button>
        
          {quotes.map((el, i) => {
            return (
            //   <li key={i}>
                <a href="#" onClick={() => setCurrQuote(el.id)}>
                  {el.author}
                </a>
            //   </li>
            );
          })}
      </div>
    );
  };
  
  export const SplitPaneLeft = (props) => {
    const topRef = createRef();
    const { clientWidth, setClientWidth } = useContext(SplitPaneContext);
  
    useEffect(() => {
      if (!clientWidth) {
        setClientWidth(topRef.current.clientWidth);
        return;
      }
  
      topRef.current.style.minWidth = clientWidth + "px";
      topRef.current.style.maxWidth = clientWidth + "px";
    }, [clientWidth]);
  
    return <div {...props} className="split-pane-left" ref={topRef} />;
  };
  
  export const SplitPaneRight = (props) => {
    const { currQuote } = useContext(QuoteContext);
  
    return (
      <div {...props} className="split-pane-right">
        Current <b>Image id</b>: {currQuote}
      </div>
    );
    
  };
  
  export default SplitPane;