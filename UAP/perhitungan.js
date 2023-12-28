var data = 
[
    {
        kode:"001",
        barang:"Barang A",
        harga:"10000"
    },
    {
        kode:"002",
        barang:"Barang B",
        harga:"20000"
    },
    {
        kode:"003",
        barang:"Barang C",
        harga:"30000"
    }
]

function cekData(kode)
{
    for(var i = 0; i < data.length; i++)
    {
        if(data[i].kode === kode)
        {
            return data[i]
        }
    }
    return null
}

function submit()
{
    var kode = document.getElementById("kode").value
    var banyak = document.getElementById("banyak").value

    var adaData = cekData(kode)

    if(adaData)
    {
        var total = adaData.harga * parseInt(banyak)
    
        alert("Total pembayaran anda adalah : " + total)

        var bayar = parseInt(prompt("masukkan uang user : "))

        if(bayar > total)
        {
            var kembalian = bayar - total
            alert("total kembalian anda adalah : " + kembalian)
        }else
        {
            alert("Uang yang anda bayarkan kurang!")
        }
    }else
    {
        alert("Kode barang yang anda masukkan salah!")
    }

}