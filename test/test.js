import
  ReactNativeSvg,
  {
    Svg,
    Circle,
    Ellipse,
    G,
    Text,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
  }
from '../src/index';
import { expect } from 'chai';

describe('mock', function () {
  it('requires', function () {
    expect(Object.keys(ReactNativeSvg)).to.have.length.above(1);
  });

  it('returns renderable types when expected', () => {
    expect(Svg).to.be.a('function');
    expect(Circle).to.be.a('function');
    expect(Ellipse).to.be.a('function');
    expect(G).to.be.a('function');
    expect(Text).to.be.a('function');
    expect(Path).to.be.a('function');
    expect(Polygon).to.be.a('function');
    expect(Polyline).to.be.a('function');
    expect(Line).to.be.a('function');
    expect(Rect).to.be.a('function');
    expect(Use).to.be.a('function');
    expect(Image).to.be.a('function');
    expect(Symbol).to.be.a('function');
    expect(Defs).to.be.a('function');
    expect(LinearGradient).to.be.a('function');
    expect(RadialGradient).to.be.a('function');
    expect(Stop).to.be.a('function');
    expect(ClipPath).to.be.a('function');
  });
});
