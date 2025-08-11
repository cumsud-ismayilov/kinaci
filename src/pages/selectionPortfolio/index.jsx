import PrintSec from "../../components/prinntSec";
import BackGroundSec from "../../components/backgroundSec";
import FreePropertyImg from "../../assets/freeProperty.jpg";

function SelectionPortfolio() {
  return (
    <div>
      <BackGroundSec bgColor="#fdf2ee"></BackGroundSec>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center gap-6 m-[50px_0px]">
        <h2 className="text-[28px] font-semibold">Obyektlərin fərdi seçimi</h2>
        <div
          className="w-full h-[500px] bg-no-repeat bg-cover bg-center rounded-[12px] mb-[37px]"
          style={{ backgroundImage: `url(${FreePropertyImg})` }}
        ></div>
        <p className="px-[40px]">
          Müştəri ehtiyaclarına diqqət yetirmək, fərdi yanaşma, səmərəlilik və
          keyfiyyət Kınacı Qrupunun əsas prioritetləridir. Əməkdaşlarımız sizin
          üçün Türkiyədə rahat mənzil, dəniz mənzərəli lüks villa, ticarət
          sahəsi və ya torpaq sahəsi tapacaqlar. Təklif olunan obyektlər sizin
          tələblərinizə, məqsədlərinizə və büdcənizə tam uyğun olacaq.
          <br />
          <br />
          Biz kömək etməyə hazırıq:
          <br />
          <br />
          Türkiyə Respublikası ərazisində dincəlmək və yaşamaq üçün rahat yer
          tapmaq istəyən fərdi alıcılar; <br /> İnvestorlar öz investisiyalarının və
          imkanlarının sərhədlərini genişləndirməkdə, habelə aktivlərdən
          səmərəli istifadə etməkdə maraqlıdırlar. <br /> Müştəri ilə ilk
          ünsiyyətimizdə onun bütün istəklərini müəyyənləşdiririk və alınan
          məlumatlara uyğun olaraq müəyyən edilmiş kriteriyalara tam cavab
          verəcək obyektləri seçirik. Daşınmaz əmlakın hərtərəfli məlumat bazası
          bizə həm ilkin, həm də təkrar bazarlarda seçimlər seçməyə imkan verir.
          Saytda mövcud olmayan fərdi obyektlərin alınması üçün xüsusi şərtlər
          təklif edirik.
          <br />
          <br />
          Proses bizim üçün həmişə vacibdir, çünki nəticənin keyfiyyəti ondan
          asılıdır. Ən yaxşı nəticə isə uğurlu əməliyyat və məmnun müştəridir.
        </p>
      </div>
      <PrintSec />
    </div>
  );
}

export default SelectionPortfolio;
