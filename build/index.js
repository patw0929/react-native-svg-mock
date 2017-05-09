Object.defineProperty(exports,"__esModule",{value:true});exports.ClipPath=exports.Stop=exports.RadialGradient=exports.LinearGradient=exports.Defs=exports.Symbol=exports.Image=exports.Use=exports.Rect=exports.Line=exports.Polyline=exports.Polygon=exports.Path=exports.Text=exports.G=exports.Ellipse=exports.Circle=exports.Svg=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

// Create a vanilla SVG component
var createComponent=function(){function createComponent(name){var _class,_temp;return _temp=_class=function(_Component){_inherits(_class,_Component);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}_createClass(_class,[{key:'render',value:function(){function render()






{
// const type = name[0].toLowerCase() + name.substr(1);

return _react2['default'].createElement('react-native-svg-mock',null,this.props.children);
}return render;}()}]);return _class;}(_react.Component),_class.displayName=name,_class.propTypes={children:_react.PropTypes.node},_temp;}return createComponent;}();


// Mock all react-native-svg exports
// from https://github.com/magicismight/react-native-svg/blob/master/index.js
var Svg=createComponent('Svg');
var Circle=createComponent('Circle');
var Ellipse=createComponent('Ellipse');
var G=createComponent('G');
var Text=createComponent('Text');
var Path=createComponent('Path');
var Polygon=createComponent('Polygon');
var Polyline=createComponent('Polyline');
var Line=createComponent('Line');
var Rect=createComponent('Rect');
var Use=createComponent('Use');
var Image=createComponent('Image');
var _Symbol=createComponent('Symbol');
var Defs=createComponent('Defs');
var LinearGradient=createComponent('LinearGradient');
var RadialGradient=createComponent('RadialGradient');
var Stop=createComponent('Stop');
var ClipPath=createComponent('ClipPath');exports.


Svg=Svg;exports.
Circle=Circle;exports.
Ellipse=Ellipse;exports.
G=G;exports.
Text=Text;exports.
Path=Path;exports.
Polygon=Polygon;exports.
Polyline=Polyline;exports.
Line=Line;exports.
Rect=Rect;exports.
Use=Use;exports.
Image=Image;exports.
Symbol=_Symbol;exports.
Defs=Defs;exports.
LinearGradient=LinearGradient;exports.
RadialGradient=RadialGradient;exports.
Stop=Stop;exports.
ClipPath=ClipPath;exports['default']=


Svg;