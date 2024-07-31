const products = [
    {"id": 1, "nombre": "Empanadas", "descripcion": "Rellenas de bondiola desmechada y capresse (6u).", "precio": 2000, "cat": "entrada", "img": "https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas.jpg", "stock": 10},
    {"id": 2, "nombre": "Brusquetas", "descripcion": "De jamón crudo con tomates secos y salmón con queso crema (8u).", "precio": 1350, "cat": "entrada", "img": "https://elpoblano.cl/cdn/shop/products/Brusquetas_540x.jpg?v=1632272566", "stock": 10},
    {"id": 3, "nombre": "Falafel", "descripcion": "Albondigas de garbanzo con ajo, cebolla, cilantro y perejil (8u).", "precio": 1300, "cat": "entrada", "img": "https://ourplantbasedworld.com/wp-content/uploads/2021/03/IMG_7324.jpg", "stock": 10},
    {"id": 4, "nombre": "Pad thai", "descripcion": "Fideos de arroz salteados con langostinos, vegetales y salsa agridulce.", "precio": 3800, "cat": "platoprincipal", "img": "https://sundaysuppermovement.com/wp-content/uploads/2023/02/pad-thai-hero.jpg", "stock": 10 },
    {"id": 5, "nombre": "Tacos", "descripcion": "Rellenos de pollo, vegetales salteados, muzzarella y salsa Buenos Aires.", "precio": 3600, "cat": "platoprincipal", "img": "https://images.ecestaticos.com/yG0jcIArAN4vQaV08ulaC6klqLU=/59x40:1999x1492/996x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F608%2F5f3%2F334%2F6085f333417b770b85d32c54eccae078.jpg", "stock": 10 },
    {"id": 6, "nombre": "Goulash", "descripcion": "Estofado de roast beaf y cebolla acompañado de ñoquis estilo húngaro.", "precio": 3900, "cat": "platoprincipal", "img": "https://i.pinimg.com/736x/20/32/a0/2032a0d77251151b118e7891abda6cba.jpg", "stock": 10 },
    {"id": 7, "nombre": "Tiramisu", "descripcion": "Capas de bizcochos, café, mascarpone y cacao en polvo.", "precio": 1300, "cat": "postre", "img": "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg", "stock": 10 },
    {"id": 8, "nombre": "Chocotorta", "descripcion": "Capas de chocolina intercaladas con queso crema y dulce de leche.", "precio": 1200, "cat": "postre", "img": "https://chocorecetas.com/wp-content/uploads/2020/09/chocotorta-sin-horno-600x450.jpg", "stock": 10 },
    {"id": 9, "nombre": "Helado", "descripcion": "Helado de crema americana, cubierto de chocolate.", "precio": 1500, "cat": "postre", "img": "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A37674DB-83CE-4AFB-AC66-B632B9EEAEA7/Derivates/f46fc419-9591-4356-8624-b4d3456d6221.jpg", "stock": 10 }
]

export const pedirProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 500)
    }
    )
}

