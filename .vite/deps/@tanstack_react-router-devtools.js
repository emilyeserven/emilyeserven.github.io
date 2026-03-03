import {
  require_jsx_runtime,
  useRouter,
  useRouterState
} from "./chunk-T4A3TJAI.js";
import "./chunk-YE3JXFAK.js";
import {
  require_react
} from "./chunk-VF4MKRLI.js";
import {
  TanStackRouterDevtoolsCore,
  TanStackRouterDevtoolsPanelCore
} from "./chunk-AVZGSCZB.js";
import "./chunk-VRQIGDT4.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/@tanstack+react-router-devtools@1.163.3_@tanstack+react-router@1.163.3_react-dom@19.2.4_fd2138d2795b8a5597aa718ea2aa10e4/node_modules/@tanstack/react-router-devtools/dist/esm/TanStackRouterDevtools.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
function TanStackRouterDevtools(props) {
  const {
    initialIsOpen,
    panelProps,
    closeButtonProps,
    toggleButtonProps,
    position,
    containerElement,
    shadowDOMTarget,
    router: propsRouter
  } = props;
  const hookRouter = useRouter({ warn: false });
  const activeRouter = propsRouter ?? hookRouter;
  const activeRouterState = useRouterState({ router: activeRouter });
  const devToolRef = (0, import_react.useRef)(null);
  const [devtools] = (0, import_react.useState)(
    () => new TanStackRouterDevtoolsCore({
      initialIsOpen,
      panelProps,
      closeButtonProps,
      toggleButtonProps,
      position,
      containerElement,
      shadowDOMTarget,
      router: activeRouter,
      routerState: activeRouterState
    })
  );
  (0, import_react.useEffect)(() => {
    devtools.setRouter(activeRouter);
  }, [devtools, activeRouter]);
  (0, import_react.useEffect)(() => {
    devtools.setRouterState(activeRouterState);
  }, [devtools, activeRouterState]);
  (0, import_react.useEffect)(() => {
    devtools.setOptions({
      initialIsOpen,
      panelProps,
      closeButtonProps,
      toggleButtonProps,
      position,
      containerElement,
      shadowDOMTarget
    });
  }, [
    devtools,
    initialIsOpen,
    panelProps,
    closeButtonProps,
    toggleButtonProps,
    position,
    containerElement,
    shadowDOMTarget
  ]);
  (0, import_react.useEffect)(() => {
    if (devToolRef.current) {
      devtools.mount(devToolRef.current);
    }
    return () => {
      devtools.unmount();
    };
  }, [devtools]);
  return (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: (0, import_jsx_runtime.jsx)("div", { ref: devToolRef }) });
}

// node_modules/.pnpm/@tanstack+react-router-devtools@1.163.3_@tanstack+react-router@1.163.3_react-dom@19.2.4_fd2138d2795b8a5597aa718ea2aa10e4/node_modules/@tanstack/react-router-devtools/dist/esm/TanStackRouterDevtoolsPanel.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var TanStackRouterDevtoolsPanel = (props) => {
  const { router: propsRouter, ...rest } = props;
  const hookRouter = useRouter({ warn: false });
  const activeRouter = propsRouter ?? hookRouter;
  const activeRouterState = useRouterState({ router: activeRouter });
  const devToolRef = (0, import_react2.useRef)(null);
  const [devtools] = (0, import_react2.useState)(
    () => new TanStackRouterDevtoolsPanelCore({
      ...rest,
      router: activeRouter,
      routerState: activeRouterState
    })
  );
  (0, import_react2.useEffect)(() => {
    devtools.setRouter(activeRouter);
  }, [devtools, activeRouter]);
  (0, import_react2.useEffect)(() => {
    devtools.setRouterState(activeRouterState);
  }, [devtools, activeRouterState]);
  (0, import_react2.useEffect)(() => {
    devtools.setOptions({
      className: props.className,
      style: props.style,
      shadowDOMTarget: props.shadowDOMTarget
    });
  }, [devtools, props.className, props.style, props.shadowDOMTarget]);
  (0, import_react2.useEffect)(() => {
    if (devToolRef.current) {
      devtools.mount(devToolRef.current);
    }
    return () => {
      devtools.unmount();
    };
  }, [devtools]);
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: (0, import_jsx_runtime2.jsx)("div", { ref: devToolRef }) });
};

// node_modules/.pnpm/@tanstack+react-router-devtools@1.163.3_@tanstack+react-router@1.163.3_react-dom@19.2.4_fd2138d2795b8a5597aa718ea2aa10e4/node_modules/@tanstack/react-router-devtools/dist/esm/index.js
var TanStackRouterDevtools2 = false ? function() {
  return null;
} : TanStackRouterDevtools;
var TanStackRouterDevtoolsInProd = TanStackRouterDevtools;
var TanStackRouterDevtoolsPanel2 = false ? function() {
  return null;
} : TanStackRouterDevtoolsPanel;
var TanStackRouterDevtoolsPanelInProd = TanStackRouterDevtoolsPanel;
export {
  TanStackRouterDevtools2 as TanStackRouterDevtools,
  TanStackRouterDevtoolsInProd,
  TanStackRouterDevtoolsPanel2 as TanStackRouterDevtoolsPanel,
  TanStackRouterDevtoolsPanelInProd
};
//# sourceMappingURL=@tanstack_react-router-devtools.js.map
