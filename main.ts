
enum FxNfm {
    //% block="Integer"
    int   = 0x0,
    //% block="Float"
    float = 0x1,
}

enum FxMopm {
    //% block="+"
    add = 0x0,
    //% block="-"
    sub = 0x1,
    //% block="*"
    mul = 0x2,
    //% block="/"
    div = 0x3,
}

enum FxMopr {
    //% block="min"
    min = 0x0,
    //% block="max"
    max = 0x1,
}

enum FxMopn {
    //% block="int +"
    iadd = 0x0,
    //% block="int *"
    imul = 0x1,
    //% block="int /"
    idiv = 0x2,
    //% block="sh left"
    lsh  = 0x4,
    //% block="sh right"
    rsh  = 0x5,
}

enum FxMopo {
    //% block="absolute"
    abs   = 0x0,
    //% block="negative"
    neg   = 0x1,
    //% block="floor"
    floor = 0x2,
    //% block="ceiling"
    ceil  = 0x3,
}

//% block="Fx math"
namespace FxM {

    //% blockId=fxmath_set block="fxn of $x"
    function set(x: number) {
        return Fx8(x)
    }
    
    //% blockId=fxmath_get block="$x=fxmath_set from $nfm"
    function get(x: Fx8, nfm: FxNfm) {
        switch (nfm) {
            case 0x0: return Fx.toInt(x)
            case 0x1: default: return Fx.toFloat(x)
        }
    }

    //% blockId=fxmath_opm block="$a=fxmath_set $op $b=fxmath_set"
    function opm(a: Fx8, op: FxMopm, b: Fx8): Fx8 {
        switch(op) {
            case 0x0: return Fx.add(a, b)
            case 0x1: return Fx.sub(a, b)
            case 0x2: return Fx.mul(a, b)
            case 0x3: return Fx.div(a, b)
        } return Fx8(NaN)
    }

    //% blockId=fxmath_opr block="$a=fxmath_set $op $b=fxmath_set"
    function opr(a: Fx8, op: FxMopr, b: Fx8) {
        switch(op) {
            case 0x0: Fx.min(a, b)
            case 0x1: Fx.max(a, b)
        } return Fx8(NaN)
    }

    //% blockId=fxmath_opn block="$x=fxmath_set $op $n"
    function opn(x: Fx8, op: FxMopn, n: number): Fx8 {
        switch(op) {
            case 0x0: Fx.iadd(n, x)
            case 0x1: Fx.imul(x, n)
            case 0x2: Fx.idiv(x, n)
            case 0x3: Fx.leftShift(x, n)
            case 0x4: Fx.rightShift(x, n)
        } return Fx8(NaN)
    }

    //% blockId=fxmath_opo block="$op $x=fxmath_set"
    function opo(op: FxMopo, x: Fx8): Fx8 {
        switch(op) {
            case 0x0: return Fx.abs(x)
            case 0x1: return Fx.neg(x)
            case 0x2: return Fx.floor(x)
            case 0x3: return Fx.ceil(x)
        } return Fx8(NaN)
    }
}