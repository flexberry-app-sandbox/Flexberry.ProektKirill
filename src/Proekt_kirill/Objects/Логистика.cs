﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt_kirill
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Логистика.
    /// </summary>
    // *** Start programmer edit section *** (Логистика CustomAttributes)

    // *** End programmer edit section *** (Логистика CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЛогистикаE", new string[] {
            "Номер as \'Номер\'",
            "Информация as \'Информация\'",
            "СлужбаДоставки as \'Служба доставки\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"}, Hidden=new string[] {
            "СлужбаДоставки.Наименвоание"})]
    [MasterViewDefineAttribute("ЛогистикаE", "СлужбаДоставки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименвоание")]
    [View("ЛогистикаL", new string[] {
            "Номер as \'Номер\'",
            "Информация as \'Информация\'",
            "СлужбаДоставки.Наименвоание as \'Наименвоание\'"})]
    public class Логистика : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private string fИнформация;
        
        private IIS.Proekt_kirill.СлужбаДоставки fСлужбаДоставки;
        
        // *** Start programmer edit section *** (Логистика CustomMembers)

        // *** End programmer edit section *** (Логистика CustomMembers)

        
        /// <summary>
        /// Информация.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Информация CustomAttributes)

        // *** End programmer edit section *** (Логистика.Информация CustomAttributes)
        [StrLen(255)]
        public virtual string Информация
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Информация Get start)

                // *** End programmer edit section *** (Логистика.Информация Get start)
                string result = this.fИнформация;
                // *** Start programmer edit section *** (Логистика.Информация Get end)

                // *** End programmer edit section *** (Логистика.Информация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Информация Set start)

                // *** End programmer edit section *** (Логистика.Информация Set start)
                this.fИнформация = value;
                // *** Start programmer edit section *** (Логистика.Информация Set end)

                // *** End programmer edit section *** (Логистика.Информация Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Номер CustomAttributes)

        // *** End programmer edit section *** (Логистика.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Номер Get start)

                // *** End programmer edit section *** (Логистика.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Логистика.Номер Get end)

                // *** End programmer edit section *** (Логистика.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Номер Set start)

                // *** End programmer edit section *** (Логистика.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Логистика.Номер Set end)

                // *** End programmer edit section *** (Логистика.Номер Set end)
            }
        }
        
        /// <summary>
        /// Логистика.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.СлужбаДоставки CustomAttributes)

        // *** End programmer edit section *** (Логистика.СлужбаДоставки CustomAttributes)
        [PropertyStorage(new string[] {
                "СлужбаДоставки"})]
        [NotNull()]
        public virtual IIS.Proekt_kirill.СлужбаДоставки СлужбаДоставки
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.СлужбаДоставки Get start)

                // *** End programmer edit section *** (Логистика.СлужбаДоставки Get start)
                IIS.Proekt_kirill.СлужбаДоставки result = this.fСлужбаДоставки;
                // *** Start programmer edit section *** (Логистика.СлужбаДоставки Get end)

                // *** End programmer edit section *** (Логистика.СлужбаДоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.СлужбаДоставки Set start)

                // *** End programmer edit section *** (Логистика.СлужбаДоставки Set start)
                this.fСлужбаДоставки = value;
                // *** Start programmer edit section *** (Логистика.СлужбаДоставки Set end)

                // *** End programmer edit section *** (Логистика.СлужбаДоставки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЛогистикаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаE", typeof(IIS.Proekt_kirill.Логистика));
                }
            }
            
            /// <summary>
            /// "ЛогистикаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаL", typeof(IIS.Proekt_kirill.Логистика));
                }
            }
        }
    }
}
