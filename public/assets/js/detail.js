
const inputCalendar = document.querySelector(".app-input");
const picMain = document.querySelector(".app__content-pic");
const contentLeft = document.querySelector(".app__content-left");
const contentCenter = document.querySelector(".app__content-center");
const contentRight = document.querySelector(".app__content-right");

// array
const animals = [
    than = "./assets/img/animals/than.jpg",
    dau = "./assets/img/animals/dau.jpg",
    tuat = "./assets/img/animals/tuat.jpg",
    hoi = "./assets/img/animals/hoi.jpg",
    ti = "./assets/img/animals/ti.jpg",
    suu = "./assets/img/animals/suu.jpg",
    dan = "./assets/img/animals/dan.jpg",
    mao = "./assets/img/animals/mao.jpg",
    thin = "./assets/img/animals/thin.jpg",
    ty = "./assets/img/animals/ty.jpg",
    ngo = "./assets/img/animals/ngo.jpg",
    mui = "./assets/img/animals/mui.jpg"
];

const can = ['canh', 'tân', 'nhâm', 'quý', 'giáp', 'ất', 'bính', 'đinh', 'mậu', 'kỷ'];
const chi = ['thân', 'dậu', 'tuất', 'hợi', 'tý', 'sửu', 'dần', 'mẹo', 'thìn', 'tỵ', 'ngọ', 'mùi'];

const zodiac = [
    {
        name:'Bạch Dương (21/3 – 20/4)',
        signature:'Nóng nảy bốc đồng',
        pointPlus: 'Bạch Dương là cung hoàng đạo nổi tiếng thẳng tính, thoải mái trong 12 cung hoàng đạo. Họ hết lòng vì bạn bè, gia đình. Đồng thời, chòm sao này có khả năng tập trung cao độ cùng nguồn năng lượng tràn trề và tham vọng trở thành người đứng đầu <br>.Tuy là những người làm việc tập trung cao độ nhưng Bạch Dương cũng luôn hô vang khẩu hiệu “chơi tới bến”. Do đó, bạn sẽ cảm thấy thật vui vẻ, tràn đầy năng lượng  khi đi cùng Bạch Dương.',
        pointAbs: 'Là thủ lĩnh của cung Lửa nên Bạch Dương cũng mang tính nóng nảy điển hình của cung này. Thẳng thắn, nóng tính, bốc đồng là những khuyết điểm khiến Bạch Dương thường vướng vào rắc rối. Chỉ cần cảm thấy tức giận, phẫn nộ thì Bạch Dương sẽ “điên cuồng” làm theo bản năng mà không hề suy nghĩ hay đắn đo gì.'
    },
    {
        name:'Kim Ngưu (20/4 – 20/5)',
        signature:'Bướng bỉnh cứng đầu',
        pointPlus: 'Chân thành và không tính toán với bạn bè, người thân là điểm tuyệt vời trong tính cách của Kim Ngưu. Với tiêu chí coi việc của bạn như của mình, cung hoàng đạo này luôn suy nghĩ trước sau, chỉ ra thiệt hơn và đưa ra lời khuyên hữu ích. Sự chân thành ấy của Kim Ngưu khiến mọi người cảm động, yêu quý và tin tưởng.',
        pointAbs: 'Bên cạnh những Kim Ngưu có vẻ ngoài khó tính nhưng chân thành, bạn còn bắt gặp những “biến thể trái tính trái nết”. Họ là những kẻ bất cẩn, suy nghĩ giản đơn, hay cười, hay nói. Nhưng dù có khác so với số đông Kim Ngưu thì tính cách chân thành đặc trưng trong cung hoàng đạo này vẫn còn nguyên.'
    },
    {
        name:'Song Tử (22/5 – 21/6)',
        signature:'Thông minh sáng tạo',
        pointPlus: 'Trong bất cứ hoàn cảnh nào, Song Tử vẫn giữ vững nét linh hoạt trong cách xử lý tình huống. Sự thông minh, sáng tạo khiến cung hoàng đạo này luôn nhìn ra những hướng giải quyết có lý mà không phải ai cũng có thể nghĩ ra. Đặc biệt, cái lưỡi “không xương” có khả năng rót mật ngọt vào tai khiến Song Tử rất được lòng người khác đấy. Tuy nhiên, những lời nói này của họ chỉ nhằm làm mọi người vui vẻ, thoải mái.',
        pointAbs: 'Dễ dàng thay đổi, tính cách sáng nắng chiều mưa của Song Tử là điểm trừ khiến mọi người xung quanh “thấp thỏm không yên”. Ngoài ra, chòm sao này cũng luôn làm việc dựa theo cảm hứng, chỉ cần tuột cảm xúc một cái là họ hầu như chẳng thể làm được gì, một phút trước còn hăng hái làm đủ việc, một phút sau đã bỏ của chạy lấy người.'
    },
    {
        name:'Cự Giải (22/6 – 22/7)',
        signature:'Tin vào cảm giác',
        pointPlus: 'Những người thuộc chòm sao Cự Giải luôn mang trong mình trái tim ấm áp, hy sinh thầm lặng vì người khác. Chính sự nhạy cảm, ân cần, dịu dàng khiến Cự Giải trở thành chỗ dựa tin cậy để bất cứ ai cũng có thể dựa vào. Trái tim nhân hậu, bao la của Cự Giải luôn rộng mở với tất cả mọi người. Ngoài ra, cung hoàng đạo này cũng rất tin vào giác quan thứ 6 và có vẻ họ luôn đúng.',
        pointAbs: 'Cự Giải luôn cảm giác thiếu an toàn và dễ bị cảm xúc chi phối. Do đó, họ cũng dễ buồn, dễ tự kỉ. Nhiều khi bạn cảm thấy không thể hiểu nổi cảm xúc chán nản, buồn man mác của Cự Giải. Bên cạnh đó, nếu không đồng cảm được với tính cách thiên về cảm xúc của Cự Giải, bạn sẽ thấy họ luôn thích lo chuyện tình cảm không đâu của người khác.'
    },
    {
        name:'Sư Tử (23/7 – 22/8)',
        signature:'Vô địch tự tin',
        pointPlus: 'Mang hình ảnh và nhiều đặc trưng của chúa tể muôn loài, nên bản thân Sư Tử luôn toát ra một khí chất bá đạo vô cùng đặc biệt. Họ có sự tự tin bẩm sinh, sẵn sàng đấu tranh bảo vệ quan điểm của mình. Tuy nhiên, họ vẫn chiếm được nhiều thiện cảm của người khác bởi tính cách phóng khoáng, dám xả thân vì bạn bè. Đồng thời, Sư Tử cũng là một người tràn đầy sáng tạo, không ngại thử nghiệm những trào lưu mới về thời trang hay công  nghệ.',
        pointAbs: 'Bất kể làm đi đâu, làm gì, dù là việc bé cỏn con hay việc đao to búa lớn, thì Sư Tử đều muốn giữ “đẳng cấp” của mình. Họ luôn có sự tự tin quá mức về bản thân cũng như trong mọi việc mình làm. Thế nhưng, trong mắt người khác, sự tự tin này có thể biến thành tự cao, nhất là khi cung hoàng đạo này lại thường hay cho là mình đúng và hiếm khi chịu tiếp thu ý kiến của người khác. Đôi khi, Sư Tử cần làm dịu lại cái tôi của bản thân.'
    },
    {
        name:'Xử Nữ (23/8 – 23/9)',
        signature:'Theo đuổi hoàn mỹ',
        pointPlus: 'Đặc điểm nổi bật trong tính cách của Xử Nữ là sự thông minh, sắc sảo và khôn khéo. Xử Nữ biết cách giải quyết vấn đề êm đẹp, nhẹ nhàng để không làm mất lòng bất kỳ một ai. Đồng thời, khả năng chế ngự tình cảm rất tốt để lúc nào trông cũng điềm đạm cũng là một điểm mạnh của Xử Nữ khiến nhiều người nể phục. Xử Nữ đem lại cho người khác cảm giác đầy lý trí, chu toàn.',
        pointAbs: 'Xử Nữ có thể dành trọn cả đời mình chỉ để theo đuổi sự hoàn mỹ. Do đó, họ luôn cầu toàn trong bất kỳ việc gì, từ học tập, công việc tới chuyện tình yêu. Họ không ngừng hoàn thiện bản thân và buộc những người xung quanh phấn đấu tới mục tiêu mà họ đặt ra. Điều này có thể khiến những người xung quanh và cả bản thân Xử Nữ cảm thấy mệt mỏi, áp lực. <br>Nói cách khác, Xử Nữ được cho là cung hoàng đạo có sở thích “tự ngược đãi mình” khi cứ không ngừng bức bản thân vào ngõ cụt với sự hoàn mỹ mà mình tôn thờ. Điều hoàn hảo mà Xử Nữ vẫn theo đuổi dường như không tồn tại ở hiện thực!'
    },
    {
        name:'Thiên Bình (24/9 – 23/10)',
        signature:'Phân vân lưỡng lự',
        pointPlus: 'Chòm sao Thiên Bình được bảo hộ bởi vị thần sắc đẹp nên nhìn chung họ luôn có vẻ ngoài thanh nhã đáng ngưỡng mộ. Do đó, những người “nguyện đổ ngả nghiêng” vì Thiên Bình rất nhiều. Đồng thời, bạn sẽ thấy Thiên Bình lúc nào cũng tỏ ra hớn hở, tươi cười nên khá được lòng mọi người. <br>Hiếm khi bạn thấy cung hoàng đạo này buồn rầu, chán nản hay cáu gắt với một ai đó. Họ luôn cố gắng công bằng trong mọi chuyện và bệnh vực những kẻ yếu. Tuy nhiên, dù bên ngoài có vẻ lúc nào cũng luôn hớn hở nhưng Thiên Bình cũng là những người sống rất chân thành, lo nghĩ cho cảm nhận của bạn bè và người thân.',
        pointAbs: 'Cả đời Thiên Bình luôn luôn rơi vào trạng thái “đứng giữa ngã ba đường” do họ thường xuyên phân vân với mọi thứ. Tính cách “khó lựa chọn” đôi khi khiến họ mất nhiều thời gian và cơ hội. Họ thường vừa muốn làm cái này, nhưng cũng vừa muốn làm cái kia, muốn chọn cái A nhưng lại không chắc rằng liệu cái B có tốt hơn không. Thực tế, chỉ cần nghiêm túc hạ quyết tâm và cứng rắn hơn, Thiên Bình sẽ có thể giải quyết được nhiều vấn đề một cách dễ dàng nhờ sự thông minh vốn có.'
    },
    {
        name:'Bọ Cạp (24/10 – 22/11)',
        signature:'Bí ấn, khó đoán',
        pointPlus: 'Trong 12 cung hoàng đạo, Bọ Cạp là chòm sao bí ẩn nhất. Đây cũng chính là điểm thu hút người khác của cung hoàng đạo này. Họ hiếm khi nào để lộ suy nghĩ, cảm xúc thực sự của mình ra bên ngoài. Lý do một phần bởi những người thuộc cung Bọ Cạp vốn là bậc thầy che giấu vì họ không muốn để lộ khuyết điểm hay để người khác nhìn thấy được cảm xúc thật của mình. Tuy nhiên, một số khác chỉ đơn thuần là có thói quen như thế, họ không thích ồn ào, phô trương, không thích thể hiện. Sở hữu tính cách khiêm tốn và sự nhạy bén trong tư duy, Bọ Cạp dường như có thể làm chủ mọi vấn đề.',
        pointAbs: 'Sự bí ẩn, thu mình khiến Bọ Cạp thường chỉ im lặng và một mình tự bước qua nỗi buồn. Dù họ có vui vẻ, thân thiện với mọi người đến đâu thì vẫn không rũ bỏ được nét lạnh lùng toát ra từ bản thân. Do đó, hầu hết những người thuộc chòm sao này đều cảm thấy cô đơn, không muốn giãi bày tâm sự của mình với người khác.'
    },
    {
        name:'Nhân Mã (23/11 – 21/12)',
        signature:'Theo đuổi tự do',
        pointPlus: 'Tính phóng khoáng chính là ưu điểm của những người cung Nhân Mã. Những người này chẳng bao giờ biết đến chuyện “để bụng” hay “trả thù” một ai. Nhờ sống vui vẻ, phóng khoáng nên Nhân Mã luôn được bạn bè yêu mến. <br>Đặc biệt, bạn sẽ bị thu hút bởi các câu chuyện trên những miền đất xa lạ, thú vị của Nhân Mã. Trong 12 cung hoàng đạo, hiếm ai có “chân đi” được như  Nhân Mã. Đối với họ, cuộc đời chính là những chuyến đi. Nhân Mã thích đặt chân đến những vùng đất xa lạ, tự khám phá và trải nghiệm những điều thú vị trong cuộc sống.',
        pointAbs: 'Nếu bắt buộc phải ngồi một chỗ quá lâu hay làm một công việc nhàn hạ, Nhân Mã sẽ  dễ dàng phát điên vì sự bó buộc. Chính bởi sở thích ưa tự do, phóng khoáng nên Nhân Mã cũng rất đào hoa, khó ai có thể trói được “con ngựa bất kham” này. Tuy nhiên, họ cần tập trung hơn cho công việc và hoàn thành các deadline để không bị “vỡ kế hoạch” chỉ vì chuyện mải chơi của mình!'
    },
    {
        name:'Ma Kết (22/12 – 19/1)',
        signature:'Lạnh lùng, nghiêm túc',
        pointPlus: 'Nghiêm túc là ưu điểm nổi bật trong tính cách của Ma Kết. Hầu hết họ dường như không biết đùa, cũng chẳng biết dối trá bao giờ. Chòm sao này nghiêm túc trong mọi việc làm và lời nói. Nhờ đó Ma Kết rất được mọi người tin tưởng. Tuy nhiên, bạn đừng lầm tưởng Ma Kết lạnh lùng nên thờ ơ trong tình cảm. Thực chất họ là người rất chân thành, thích bày tỏ tình cảm bằng hành động. <br>Đối với những người thân thiết, Ma Kết có xu hướng thoải mái và bộc lộ nhiều sự nhí nhảnh của mình hơn, nhưng chuyện ít nói thì hầu như không thay đổi mấy. Do đó trong nhiều trường hợp, người khác không thực sự hiểu được Ma Kết đang nghĩ gì, có đang buồn hay không, có khó chịu gì không.',
        pointAbs: 'Đôi khi chính sự nghiêm túc, thật thà có phần lạnh lùng khiến Ma Kết bị “bài xích” bởi có những chuyện không nên nói thật thì tốt hơn. Thêm nữa, Ma Kết thường là những người không khéo léo trong chuyện ăn nói. Nhiều khi nói lời thật lòng mà không biết cách lựa trước, ướm sau nên dễ làm mất lòng đối phương hoặc khiến người nghe hiểu lầm mình có ý xấu. Thực ra chỉ đơn giản là họ không giỏi biểu đạt cảm xúc của mình như các chòm sao khác thôi!'
    },
    {
        name:'Bảo Bình (20/1 – 18/2)',
        signature:'Khát vọng thể hiện',
        pointPlus: 'Bảo Bình là con người của khoa học, họ rất hợp với các dự án mang tính “thí điểm”. Bởi cung hoàng đạo này làm việc gì cũng dựa trên cơ sở khoa học, có phân tích, dẫn chứng rõ ràng. Họ có khát vọng thể hiện tài năng của mình với mọi người. Bên cạnh đó, Bảo Bình cũng là người khá chu toàn, họ luôn quan tâm tới mọi thứ và đề phòng nhiều khả năng xảy ra. Do đó, dù không giỏi biểu đạt cảm xúc nhưng chòm sao này dành rất nhiều tình cảm cho gia đình và bạn bè.',
        pointAbs: 'Bảo Bình không thích người khác quá thân thiện, niềm nở với mình và cũng khó để họ thân thiết quá mức với một ai đó. Do đó, Bảo Bình thường bị cho là quá lạnh lùng, thờ ơ trong tình cảm. Đồng thời, cách biểu đạt tình cảm không khéo léo của họ cũng dễ khiến đối phương cảm thấy chán nản, mệt mỏi. Họ không thích những quy tắc khô khan, lại hay bị chi phối bởi cảm xúc nên đôi khi hiệu suất công việc không được tích cực.'
    },
    {
        name:'Song Ngư (19/2 – 20/3)',
        signature:'Mộng mơ trên mây',
        pointPlus: 'Sự trong sáng, tốt bụng vô điều kiện của Song Ngư có khả năng “cảm hóa” được cả những kẻ xấu xa. Họ biết cách nhún nhường trong những trường hợp cần thiết và cũng biết cảm thông cho những hoàn cảnh khó hơn mình. Người cung này thường mang lại không khí dễ chịu cho những người xung quanh. <br>Bên cạnh đó, hầu hết Song Ngư đều có tài năng ở một lĩnh vực nào đó. Tuy nhiên, họ rất khiêm tốn, không hiếu thắng. Cung hoàng đạo này thích những thích nơi yên tĩnh và cảnh thiên nhiên tươi đẹp hơn là một bữa tiệc hoành tráng, náo nhiệt.',
        pointAbs: 'Song Ngư là chòm sao lãng mạn và ưa mơ màng nhất trong 12 cung hoàng đạo nên họ thường “mơ mộng trên mây”. Đôi khi, cung hoàng đạo này nên học cách chấp nhận cuộc sống thực tế. <br>Ngoài ra, chòm sao này cũng dễ bị cảm xúc chi phối, chỉ cần tụt cảm xúc, họ sẽ rầu rĩ như bong bóng xì hơi, chẳng còn hứng thú để làm gì. Đồng thời, họ cũng rất dễ bị người khác lợi dụng tình cảm do không biết cách từ chối khi ai đó van nài sự giúp đỡ.'
    }
];

function checkZodiac(month, date){
  switch(month){
    case 1:
      if( date<=19 && date>0){
        console.log("bạn thuộc cung ma kết");
        return zodiac[9];
      }
      else if (date>19 && date <=31){
        console.log("bạn thuộc cung bảo bình");
        return zodiac[10];
      }
      break;
      
      
    case 2:
      if(date<=18 && date >0){
        console.log("bạn thuộc cung bảo bình");
        return zodiac[10];
      }
      else if(date>18 && date <=28){
        console.log("bạn thuộc cung song ngư");
        return zodiac[11];
      }
      break;
      
      
    case 3:
      if(date<=20 && date >0){
        console.log("bạn thuộc cung song ngư");
        return zodiac[11];
      }
      else if(date>20 && date <=31){
        console.log("bạn thuộc cung bạch dương");
        return zodiac[0];
      }
      break;
      
      
    case 4:
      if(date<=19 && date >0){
        console.log("bạn thuộc cung bạch dương");
        return zodiac[0];
      }
      else if(date>19 && date <=30){
        return zodiac[1];
        console.log("bạn thuộc cung kim ngưu");
      }
      break;
      
    case 5:
      if(date<=20 && date >0){
        console.log("bạn thuộc cung kim ngưu");
        return zodiac[1];
      }
      else if(date>20 && date <=31){
        console.log("bạn thuộc cung song tử");
        return zodiac[2];
      }
      break;
      
      
    case 6:
      if(date<=21 && date >0){
        console.log("bạn thuộc cung song tử");
        return zodiac[2];
      }
      else if(date>21 && date <=30){
        console.log("bạn thuộc cung cự giải");
        return zodiac[3];
      }
      break;    
      
      
    case 7:
      if(date<=22 && date >0){
        console.log("bạn thuộc cung cự giải");
        return zodiac[3];
      }
      else if(date>22 && date<=31){
        console.log("bạn thuộc cung sư tử");
        return zodiac[4];
      }
      break;
      
      
    case 8:
      if(date<=22&& date >0){
        console.log("bạn thuộc cung sư tử");
        return zodiac[4];
      }
      else if(date>22 && date<=31){
        console.log("bạn thuộc cung xử nữ");
        return zodiac[5];
      }
      break;
      
      
     case 9:
      if(date<=22 && date >0){
        console.log("bạn thuộc cung xử nữ");
        return zodiac[5];
      }
      else if(date>22 && date <=30){
        console.log("bạn thuộc cung thiên bình");
        return zodiac[6];
      }
      break;
      
      
    case 10:
      if(date<=23 && date>0){
        console.log("bạn thuộc cung thiên bình");
        return zodiac[6];
      }
      else if(date>23&& date<=31){
        console.log("bạn thuộc cung hổ cáp");
        return zodiac[7];
      }
      break;
      
     
    case 11:
      if(date<=21&& date>0){
        console.log("bạn thuộc cung hổ cáp");
        return zodiac[7];
      }
      else if(date>21 && date <=30){
        console.log("bạn thuộc cung nhân mã");
        return zodiac[8];
      }
      break;
      
      
   case 12:
      if(date<=21 && date >0){
        console.log("bạn thuộc cung nhân mã");
        return zodiac[8];
      }
      else if(date>21 && date <=31){
        console.log("bạn thuộc cung ma kết");
        return zodiac[9];
      }
    break;
      
      
    default: alert("nhập sai thông tin");
              break;
              }
  }


console.log(zodiac[0])

function isLeap(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

// inputCalendar.valueAsDate = new Date();
inputCalendar.onchange = (e) => {
    const birthday = new Date(inputCalendar.value);
    year = birthday.getFullYear();
    month = birthday.getMonth()+1;
    day = birthday.getDate();

    const beforeSolar = can[(year%10)];
    const afterSolar = chi[(year%12)];
    const imgSolar = animals[(year%12)];
  
    const dateNow = new Date();
    const diffTime = Math.abs(dateNow - birthday);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    const daysInYear = isLeap(year) ? 366 : 365;

    const oldNumber = Math.floor(diffDays / daysInYear);
    const dayOfOld = diffDays % daysInYear;

    const lunar = solarlunar.solar2lunar(year, month, day);
    const dateLunar = lunar.lDay;
    const monthLunar = lunar.lMonth;
    const yearLunar = lunar.lYear;

    const beforeLunar = can[(yearLunar%10)];
    const afterLunar = chi[(yearLunar%12)];
    const imgLunar = animals[(yearLunar%12)];

    const zodiac = new checkZodiac(month, day);

    picMain.onclick = (e) => {
        count += 1;
        if(count === 1) {
          contentLeft.classList.remove("visible-hidden");
          contentLeft.innerHTML = `
            <h3 class="app__info-title">Tử vi</h3>
            <p>
                Ngày sinh dương lịch của bạn là ngày
                <span>${day}</span> tháng <span>${month}</span> năm <span>${year}</span>
                thuộc can <span>${beforeSolar}</span>, chi <span>${afterSolar}</span> - 
                tức vào năm <span>${beforeSolar} ${afterSolar}</span>
                . Hiện tuổi dương lịch của bạn là <span>${oldNumber}</span> tuổi <span>${dayOfOld}</span> ngày.
            </p>

            <img src="${imgSolar}" alt="">

            <p>
                Ngày sinh âm lịch của bạn là 
                <span>${dateLunar}</span> tháng <span>${monthLunar}</span> năm <span>${yearLunar}</span>
                thuộc can <span>${beforeLunar}</span>, chi <span>${afterLunar}</span> - 
                tức vào năm <span>${beforeLunar} ${afterLunar}</span>.
            </p>

            <img src="${imgLunar}" alt="">
          `;
        }
        else if(count === 2) {
          contentCenter.classList.remove("visible-hidden");
          contentCenter.innerHTML = `
          <h3 class="app__info-title">Cung hoàng đạo</h3>
          <p>Theo cách tính 12 cung hoàng đạo bạn sinh ngày 
              <span>${day}</span> tháng <span>${month}</span> năm <span>${year}</span> 
              thuộc vào cung <span>${zodiac.name}</span> trong 12 cung hoàng đạo.
          </p>
          <img src="" alt="">
          <p>
              <span>Tính cách đặc trưng:</span> ${zodiac.signature}
          </p>
          <p>
              <span>Điểm cộng:</span> 
              ${zodiac.pointPlus}
          </p>

          <p>
              <span>Điểm trừ:</span> 
              ${zodiac.pointAbs}
          </p>
          `;
        }
        else if(count === 3) {
          contentRight.classList.remove("visible-hidden");
          noticeEnd.innerHTML = "END";
        }
    }
};

  
  // console.log(solarlunar.solar2lunar(2021, 01, 14));
  
  // const date1 = new Date('7/13/2010');
  // const date2 = new Date('12/15/2010');
  // const diffTime = Math.abs(date2 - date1);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");