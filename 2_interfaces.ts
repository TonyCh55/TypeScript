interface Rect {
  readonly id: string;
  //? unneccesery
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "12232",
  size: {
    width: 20,
    height: 30,
  },
  color: "#000",
};

const rect2: Rect = {
  id: "12233",
  size: {
    width: 50,
    height: 80,
  },
};

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=====================Inheritance
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 200,
    height: 300,
  },
  getArea() {
    return this.size.with * this.size.height;
  },
};

//'=================================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

//====================================
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid grey",
  marginTop: "20px",
  borderRadius: "5px",
};
